import {
    types,
    Instance,
    SnapshotIn,
    getParent,
    destroy,
} from "mobx-state-tree";

export const Tag = types.model({
    name: types.string,
});

export const CartItem = types
    .model({
        tier: types.string,
        shape: types.string,
        size: types.string,
        flavor: types.string,
        filling: types.string,
        frosting: types.string,
        fruit: types.string,
        cakeBasePrice: types.number,
        flavorsPrice: types.number,
        price: types.number,
        tags: types.optional(types.array(Tag), []),
    })
    .actions((self) => ({
        changeName(newFlavor: string) {
            self.flavor = newFlavor;
        },
        changePrice(newPrice: number) {
            self.price = newPrice;
        },
        remove() {
            getParent<typeof Cart>(self, 2).remove(self);
        },
    }));

export const Cart = types
    .model({
        items: types.optional(types.array(CartItem), []),
    })
    .actions((self) => ({
        addCartItem(
            cartItem: SnapshotIn<typeof CartItem> | Instance<typeof CartItem>
        ) {
            self.items.push(cartItem);
        },
        remove(item: SnapshotIn<typeof CartItem>) {
            destroy(item);
        },
    }))
    .views((self) => ({
        get totalItems() {
            return self.items.reduce((sum, entry) => sum + entry.price, 0);
        },
    }));
