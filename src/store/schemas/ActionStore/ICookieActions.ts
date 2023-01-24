export interface ICookieActions {
    cookieCountActions: ICookieCountActions;
    cookieDetailsActions: ICookieDetailsActions;
}

export interface ICookieCountActions {
    handleCookieQuantityCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCookieFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCookieFrostingCost: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    setCookieSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICookieDetailsActions {
    // change events
    handleCookieOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleCookieRecipient: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePreferredCookieColors: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleCookiePhotoExample: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCookieLinkExample: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleCookieAdditionalDetails: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}
