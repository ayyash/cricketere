import { DataList, IList } from '../core/services';

export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    isPublic: boolean;
}

export class Product {

    public static NewInstance(product: any): IProduct {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            isPublic: product.is_public
        }
    }
    public static NewInstances(products: any[]): IProduct[] {
        return products.map(Product.NewInstance);
    }
    public static NewList(dataset: any): IList<IProduct> {
        const dl = new DataList<IProduct>();
        dl.mapper = Product.NewInstance;
        return dl.NewDataList(dataset);

    }



}
