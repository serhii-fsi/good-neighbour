export interface TestData {
    usersData: User[];
    typesData: HelpType[];
    requestsData: HelpRequest[];
    responsesData: HelpResponse[];
}

export interface User {
    user_id?: string;
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
    user_id?: number;
    type_id: number;
    title: string;
    description: string;
    created_at: string;
    req_date: string;
    post_code: string;
    status: string;
}

export interface HelpResponse {
    user_id?: string;
    request_id: string;
    body_response: string;
    created_at: string;
    status: string;
}
