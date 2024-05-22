export interface Data {
    usersData: User[];
    typesData: HelpType[];
    helpRequestsData: HelpRequest[];
    commentsData: Comment[];
    helpOffersData: HelpOffer[];
}

// { key?: string} ? - means key is optional

export interface User {
    username?: string;
    email?: string;
    avatar_url?: string;
    age?: number;
    first_name: string;
    last_name: string;
    about?: string;
    address: string;
    post_code: string;
    phone_number?: string;
    additional_contacts?: string;
    help_radius?: string;
    help_offers_count?: number;
    help_requests_count?: number;
}
export interface HelpRequest {
    title: string;
    author_id: number;
    help_type_id: number;
    description: string;
    created_at: string;
    req_date: string;
    post_code?: string;
    status: string;
}
export interface HelpOffer {
    helper_id: string | number;
    help_request_id: string | number;
    status: string;
}
export interface Comment {
    author_id: number;
    help_request_id: number;
    created_at: string;
    description: string;
}
export interface HelpType {
    name: string;
    description?: string;
}
