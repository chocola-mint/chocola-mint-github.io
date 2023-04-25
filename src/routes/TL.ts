import { en_US } from "./TL_en-US";

export function GetTL(loc: string){
    switch(loc){
        case "en-US":
        default:
            return en_US;
    }
}
export default interface TLTable {
    role: string;
    socials: {
        itch: Social;
        twitter: Social;
        youtube: Social;
        github: Social;
        pixiv: Social;
    };
    pages: {
      aboutMe: Page;
      works: Page;
      talks: Page;
      contact: Page;
    };
}
interface Social {
    tooltip: string;
}
interface Page {
    label: string;
    tooltip: string;
}