import EnhancedTable from "../../components/enhanced-table";
import {useEffect, useState} from "react";
import Api from "../../api";
import {flattenResponse, columns, applyFilters} from "../../utils/sold-items-table.util";
import Filters from "./components/Filters";
import {getDefaultSoldItemsFilters} from "../../constants/sold-items-filters.const";


const SoldItems = () => {
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [filters, setFilters] = useState(getDefaultSoldItemsFilters());

    useEffect(() => {
        Api.soldItems.getAll().then((data) => {
            const flattenedResponse = flattenResponse(data.sold_items);
            setRows(flattenedResponse);
        })
    }, []);

    const filteredRows = applyFilters(rows, filters);

    return (
        <>
            <Filters
                filters={filters}
                setFilters={setFilters}
            />
            <EnhancedTable
                rows={filteredRows}
                columns={columns}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                selected={selected}
                setSelected={setSelected}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                tableHeaderText="Sold items"
            />
        </>
    );
};

export default SoldItems;