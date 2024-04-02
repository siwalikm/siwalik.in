interface YoutubeResponse {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: {
        kind: string;
        etag: string;
        id: string;
        statistics: {
            viewCount: string;
            subscriberCount: string;
            hiddenSubscriberCount: boolean;
            videoCount: string;
        };
    }[];
}

export async function getYoutubeSubs(): Promise<YoutubeResponse> {
    const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;
    const YOUTUBE_USER_ID = import.meta.env.YOUTUBE_USER_ID;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_USER_ID}&key=${YOUTUBE_API_KEY}`);
    const data: YoutubeResponse = await response.json();
    return data;
}