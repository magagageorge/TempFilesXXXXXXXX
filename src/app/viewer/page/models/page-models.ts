export class PageGeneralSettingsForm {
    id: number;
    page_id: number;
    published: number;
    visitors_can_post: number;
    private_messages: number;
    country_restrictions: string;
    age_restrictions: string;
    page_moderation: string;
    profanity_filter: number;
    page_updates: number;
    post_multiple_language: number;
    translate_automatically: number;
    comment_ranking: number;
    page_deletion: string;
}

export class PageGeneralSettings {
    id: number;
    page_id: number;
    published: number;
    visitors_can_post: number;
    private_messages: number;
    country_restrictions: string;
    age_restrictions: string;
    page_moderation: string;
    profanity_filter: number;
    page_updates: number;
    post_multiple_language: number;
    translate_automatically: number;
    comment_ranking: number;
    page_deletion: string;
}

export class PageUserProfile {
    user_id: number;
    name: string;
    title: string;
    about: string;
    url: string;
    avatar: any;
    cover: any;
    my_profile: boolean;
    in_edit: boolean;
}


export class PageNotificationSettingsForm {
    id: number;
    page_id: number;
    notify: string;
    page_mentioned: number;
    page_review: number;
    page_sent_message: number;
    page_followed: number;
    post_commented: number;
    post_shared: number;
    post_likes: number;
    comment_likes: number;
    edit_on_page_post: number;
    edit_on_page_comment: number;
    messages: string;
    email: string;
    text_messages: string;
}

export class PageNotificationSettings {
    id: number;
    page_id: number;
    notify: string;
    page_mentioned: number;
    page_review: number;
    page_sent_message: number;
    page_followed: number;
    post_commented: number;
    post_shared: number;
    post_likes: number;
    comment_likes: number;
    edit_on_page_post: number;
    edit_on_page_comment: number;
    messages: string;
    email: string;
    text_messages: string;
}