export interface IProductActions {
    detailsActions: IProductDetailsActions;
}

interface IProductDetailsActions {
    handleArrivalDate: (d: Date) => void;
    handleOccasionDate: (d: Date) => void;
    handleOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleRecipient: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleDeliveryOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePreferredColors: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleInscriptionColors: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handlePhotoExample: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLinkExample: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleAdditionalDetails: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}
