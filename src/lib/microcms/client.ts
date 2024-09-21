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
    // まず全体のデータ件数を取得
    const totalData = await client.getList<LGTM>({
        endpoint: "lgtms",
        queries: {
            limit: 0,  // データ本体は不要なのでlimitを0に設定
        },
    });

    // データ件数が7件未満なら全件取得
    const totalCount = totalData.totalCount;
    if (totalCount <= 8) {
        return await client.getList<LGTM>({
            endpoint: "lgtms",
            queries,
        });
    }

    // ランダムなオフセットを計算して7件取得
    const randomOffset = Math.floor(Math.random() * (totalCount - 7));
    const data = await client.getList<LGTM>({
        endpoint: "lgtms",
        queries: {
            limit: 8,
            offset: randomOffset,
        },
    });

    return data;
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
