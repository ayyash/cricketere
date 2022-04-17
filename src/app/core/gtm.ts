import { ConfigService, IProduct, IProject } from './services';

declare let dataLayer: any[]; // Declare google tag


export enum EnumGtmSource {
    ProductsList = 'products list',
    ProductsRelatedList = 'products related',
    ProjectsList = 'projects list',
    EmployeesList = 'employees list',
    ProductsDetail = 'products detail',
    ProjectsDetail = 'projects detail',
    EmployeesDetail = 'employees detail',
}
export enum EnumGtmEvent {
    Login = 'garage_login',
    Click = 'garage_click',
    NavClick = 'garage_nav_click',
    Search = 'garage_search',
    Filter = 'garage_filter',
    Sort = 'garage_sort',
    Next = 'garage_next',
    Upload = 'garage_upload',
    Cancel = 'garage_cancel',
    Reveal = 'garage_reveal',
    Details = 'garage_view_item',
    List = 'garage_view_list',
    Share = 'garage_share',
    PageView = 'garage_page_view'
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
export interface IGtmTrack {
    event: EnumGtmEvent;  // to control events site-wise
    source?: EnumGtmSource; // to control where the event is coming from
}


export class GtmTracking {


    public static get IsEnabled(): boolean {
        return ConfigService.Config.GTM.isEnabled && typeof window !== 'undefined' && window['dataLayer'];
    }



    public static RegisterEvent(track: IGtmTrack, extra?: any): void {

        let data = {
            event: track.event, gr_track: {
                source: track.source,
                ...extra
            }
        };
        _debug(data, 'register event');
        if (GtmTracking.IsEnabled) {
            dataLayer.push(data);
        }

        /*
{
    event: 'gr_upload',
    gr_track: {
        source: 'product - details',
        action: 'drag'
    }
}
        */

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
        return {items};
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
        return { items, value};

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
        return {action: action}
    }
    // then all other mappers for employee, and project
}
