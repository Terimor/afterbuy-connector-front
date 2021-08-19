import {CatalogsContext} from "../../../context/catalogs-context";
import {Box, Button, MenuItem, Select, TextField} from "@material-ui/core";
import {useState} from "react";
import {getDefaultSoldItemsFilters} from "../../../constants/sold-items-filters.const";

const Filters = (props) => {
    const {filters, setFilters} = props;
    const [localFilters, setLocalFilters] = useState(filters);

    const handleFilterChange = (value, filterKey) => {
        setLocalFilters({...localFilters, [filterKey]: value});
    }

    const handleApplyFiltersClick = () => {
        setFilters(localFilters);
    }

    const handleResetFiltersClick = () => {
        setLocalFilters(getDefaultSoldItemsFilters());
        setFilters(getDefaultSoldItemsFilters());
    }

    return (
        <>
            <CatalogsContext.Consumer>
                {(catalogs) => (
                    <Box display="flex" flexWrap="wrap">
                        <Box>
                            <TextField label="Order ID" value={localFilters.order_id}
                                       onChange={(e) => handleFilterChange(e.target.value, 'order_id')}/>
                        </Box>
                        <Box>
                            <TextField label="Title" value={localFilters.title}
                                       onChange={(e) => handleFilterChange(e.target.value, 'title')}/>
                        </Box>
                        <Box>
                            <Select
                                value={localFilters.category}
                                onChange={(e) => handleFilterChange(e.target.value, 'category')}
                            >
                                <MenuItem value={null}>None</MenuItem>
                                {catalogs.categories && catalogs.categories.map((elem) => <MenuItem
                                    value={elem.label}>{elem.label}</MenuItem>)}
                            </Select>
                        </Box>
                        <Box>
                            <TextField label="Min quantity" value={localFilters.min_quantity}
                                       onChange={(e) => handleFilterChange(e.target.value, 'min_quantity')}/>
                        </Box>
                        <Box>
                            <TextField label="Max quantity" value={localFilters.max_quantity}
                                       onChange={(e) => handleFilterChange(e.target.value, 'max_quantity')}/>
                        </Box>
                        <Box>
                            <TextField label="Min price" value={localFilters.min_price}
                                       onChange={(e) => handleFilterChange(e.target.value, 'min_price')}/>
                        </Box>
                        <Box>
                            <TextField label="Max price" value={localFilters.max_price}
                                       onChange={(e) => handleFilterChange(e.target.value, 'max_price')}/>
                        </Box>
                        <Box>
                            <TextField label="Min volume" value={localFilters.min_volume}
                                       onChange={(e) => handleFilterChange(e.target.value, 'min_volume')}/>
                        </Box>
                        <Box>
                            <TextField label="Max volume" value={localFilters.max_volume}
                                       onChange={(e) => handleFilterChange(e.target.value, 'max_volume')}/>
                        </Box>
                        <Box>
                            <TextField label="Product code" value={localFilters.product_code}
                                       onChange={(e) => handleFilterChange(e.target.value, 'product_code')}/>
                        </Box>
                        <Box>
                            <Select
                                value={localFilters.afterbuy_account}
                                onChange={(e) => handleFilterChange(e.target.value, 'afterbuy_account')}
                            >
                                <MenuItem value={null}>None</MenuItem>
                                {catalogs.afterbuy_accounts && catalogs.afterbuy_accounts.map((elem) => <MenuItem
                                    value={elem.label}>{elem.label}</MenuItem>)}
                            </Select>
                        </Box>
                        <Box>
                            <TextField label="Afterbuy ID" value={localFilters.afterbuy_id}
                                       onChange={(e) => handleFilterChange(e.target.value, 'afterbuy_id')}/>
                        </Box>
                        <Box>
                            <TextField label="Min date" value={localFilters.min_date}
                                       onChange={(e) => handleFilterChange(e.target.value, 'min_date')}/>
                        </Box>
                        <Box>
                            <TextField label="Max date" value={localFilters.max_date}
                                       onChange={(e) => handleFilterChange(e.target.value, 'max_date')}/>
                        </Box>
                    </Box>
                )}
            </CatalogsContext.Consumer>
            <Box>
                <Button variant="contained" color="primary" onClick={handleApplyFiltersClick}>
                    Apply filters
                </Button>
                <Button variant="contained" color="secondary" onClick={handleResetFiltersClick}>
                    Reset
                </Button>
            </Box>
        </>
    );
}

export default Filters;