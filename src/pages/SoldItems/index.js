import EnhancedTable from "../../components/enhanced-table";
import {useEffect, useState} from "react";
import Api from "../../api";
import {flattenResponse, columns} from "../../utils/sold-items-table.util";


const SoldItems = () => {
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)

    useEffect(() => {
        Api.soldItems.getAll().then((data) => {
            const flattenedResponse = flattenResponse(data.sold_items);
            setRows(flattenedResponse);
        })
    }, []);

    return (
        <EnhancedTable
            rows={rows}
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
        />
    );
};

export default SoldItems;