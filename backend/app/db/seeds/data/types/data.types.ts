export interface TestData {
    usersData: User[];
    typesData: HelpType[];
    helpRequestsData: HelpRequest[];
    commentsData: Comments[];
    helpOffersData: HelpOffers[];
}

export interface User {
    id?: string;
    user_id: string;
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
    id?: string;
    user_id: number;
    type_id: number;
    title: string;
    description: string;
    created_at: string;
    req_date: string;
    post_code: string;
    status: string;
}

export interface Comments {
    id?: string;
    user_id: string;
    help_request_id: string;
    body_response: string;
    created_at: string;
    status: string;
}

export interface HelpOffers {
    id?: string;
    user_id: string;
    help_request_id: string;
    status: string;
}
