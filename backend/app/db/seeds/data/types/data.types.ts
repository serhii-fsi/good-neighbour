export interface Data {
    usersData: User[];
    typesData: HelpType[];
    helpRequestsData: HelpRequest[];
    commentsData: Comment[];
    helpOffersData: HelpOffer[];
}

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    address: string;
    post_code: string;
    avatar_url: string;
    age: number;
    help_offers_count: number;
    help_requests_count: number;
}

export interface HelpType {
    type: string;
    description: string;
}

export interface HelpRequest {
    user_id: number;
    type_id: number;
    title: string;
    description: string;
    created_at: string;
    req_date: string;
    post_code: string;
    status: string;
}

export interface Comment {
    user_id: number;
    help_request_id: number;
    body_response: string;
    created_at: string;
}

export interface HelpOffer {
    user_id: number;
    help_request_id: number;
    status: string;
}
