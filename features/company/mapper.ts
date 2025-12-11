import dayjs from "dayjs";
import { TCompany } from "./type";

export const CompanyMapper = (data: TCompany[]) => {
    return data?.map(_data => ({
        ..._data,
        name: _data?.name || "N/A",
        created: _data?.created ? dayjs(_data?.created).format("DD/MM/YYYY") : "N/A"
    }))
}