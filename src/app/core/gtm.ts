import { _global } from './common';
import { IProduct, IProject } from './services';

declare let dataLayer: any[]; // Declare google tag


export enum EnumGtmSource {
    ProductsList = 'products list',
    ProductsRelatedList = 'products related',
    ProjectsList = 'projects list',
    EmployeesList = 'employees list',
    ProductsDetail = 'products detail',
    ProjectsDetail = 'projects detail',
    EmployeesDetail = 'employees detail',
    Anywhere = 'anywhere',
    Homepage = 'home',
    NavigationDesktop = 'navigation desktop',
}
export enum EnumGtmEvent {
    Login = 'garage_login',
    Click = 'garage_click',
    NavClick = 'garage_nav_click',
    Search = 'garage_search',
    Filter = 'gr_filter',
    Sort = 'garage_sort',
    Next = 'garage_next',
    Upload = 'garage_upload',
    Cancel = 'garage_cancel',
    Reveal = 'garage_reveal',
    Details = 'garage_view_item',
    List = 'garage_view_list',
    Share = 'garage_share',
    PageView = 'garage_page_view',
    GroupClick = 'garage_group_click',
    Error = 'garage_error'
}
export enum EnumGtmMethod {
    Google = 'google',
    Facebook = 'facebook',
    Twitter = 'twitter',
    LinkedIn = 'linkedin',
    Instagram = 'instagram',
    Pinterest = 'pinterest',
    Unknown = 'unknown'
}
export enum EnumGtmAction {
    Click = 'click',
    Drag = 'drag'
}
export enum EnumGtmGroup {
    Login = 'login',
    Upload = 'upload',
    General = 'general',
    Navigation = 'navigation'
}
export interface IGtmTrack {
    event: EnumGtmEvent;  // to control events site-wise
    source?: EnumGtmSource; // to control where the event is coming from
}


export class GtmTracking {

    private static _values = {};
    public static get Values(): any {
        return this._values;
    }
    public static set Values(value: any) {
        this._values = { ...this._values, ...value };
    }


    private static Push(data: any) {
        // watch here if gtm is called too early config may not be set yet
        // _attn(ConfigService.Config.Storage.Key, 'what is the key here');
        if (_global['dataLayer']) {
            dataLayer.push(data);
        }
    }

    public static RegisterEvent(track: IGtmTrack, extra?: any): void {

        let data = {
            event: track.event, gr_track: {
                source: track.source,
                ...extra
            }
        };
        _debug(data, 'register event', 'gtm');
        this.Push(data)

    }

    public static SetValues(values: any): void {

        let data = {
            gr_values: { ...values }
        };
        _debug(data, 'Set GA value', 'gtm');
       this.Push(data);
    }
    public static Reset() {

        this.Push(function () {
            this.reset();
        });

        GtmTracking.SetValues(GtmTracking.Values);

    }



    public static MapGroup(group: EnumGtmGroup, label?: string) {
        return { group, label };
    }

    public static MapPath(path: string): any {
        return { 'page_location': path };

    }

    public static MapProjects(projects: IProject[], position?: number) {
        const items = projects.map(GtmTracking.MapProject);
        // calculate value
        if (position) {
            items[0].index = position;
        }
        return { items };
    }

    public static MapProject(project: IProject, index: number) {
        return {
            item_name: project.title,
            item_id: project.id,
            item_category: project.category.key,
            index: index
        };
    }


    public static MapProducts(products: IProduct[], position?: number) {
        const items = products.map(GtmTracking.MapProduct);
        // calculate value
        const value = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

        if (position) {
            items[0].index = position;
        }
        return { items, value };

    }

    public static MapProduct(product: IProduct, index: number) {
        return {
            item_name: product.name,
            item_id: product.id,
            price: product.price,
            currency: 'AUD',
            index
        };
    }

    public static MapSearch(keyword: string) {
        return { 'search_term': keyword };
    }

    public static MapLogin(method: EnumGtmMethod) {
        return { method };
    }



    public static MapAction(action: EnumGtmAction) {
        return { action: action };
    }

    public static MapUser(user: any) {
        return {
            user: user.name,
            email: user.email
        };
    }
    public static MapProfile(profile: any) {
        return {
            language: profile.language,
            country: profile.country
        };
    }

    // then all other mappers for employee, and project
}
