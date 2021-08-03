import {CatalogsContext} from "../../../context/catalogs-context";
import {Box, TextField} from "@material-ui/core";

const Filters = (props) => {
    const {filters, setFilters} = props;

    const handleOrderIdChange = (event) => {
        setFilters({...filters, order_id: event.target.value});
    };

    const handleExternalIdChange = (event) => {
        setFilters({...filters, external_id: event.target.value});
    };

    return (
        <CatalogsContext.Consumer>
            {(catalogs) => (
                <Box display="flex" justifyContent="space-evenly">
                    <Box>
                        <TextField label="Order ID" value={filters.order_id} onChange={handleOrderIdChange}/>
                    </Box>
                    <Box>
                        <TextField label="External ID" value={filters.external_id} onChange={handleExternalIdChange}/>
                    </Box>
                </Box>
            )}
        </CatalogsContext.Consumer>
    );
}

export default Filters;