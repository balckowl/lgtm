import { createClient, type MicroCMSQueries, type MicroCMSDate, type MicroCMSImage } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
const client = createClient({
    serviceDomain: MICROCMS_SERVICE_DOMAIN,
    apiKey: MICROCMS_API_KEY,
});

//型定義
export type LGTM = {
    id: string,
    imageUrl: MicroCMSImage;

} & MicroCMSDate;

//APIの呼び出し
export const getList = async (queries?: MicroCMSQueries) => {
    return await client.getList<LGTM>({ endpoint: "lgtms", queries });
};


export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<LGTM>({
        endpoint: "lgtms",
        contentId,
        queries,
    });
};
