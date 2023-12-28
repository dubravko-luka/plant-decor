import React, { memo } from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store/types";

type Props = {
    options: any,
    onChange?: any
}

const PaginationContent: React.FC<Props> = ({ options, onChange }) => {

    const { width } = useSelector((state: RootState) => state?.window)

    return (
        <>
            <Pagination
                showSizeChanger={false}
                responsive={width < 410 ? true : false}
                onChange={onChange}
                {...options}
            />
        </>
    )
}

export default memo(PaginationContent)