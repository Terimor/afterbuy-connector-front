import {useEffect, useState} from "react";
import Api from '../../api';
import {Box, Button, Grid} from "@material-ui/core";
import CategoryCard from "./components/CategoryCard";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Api.categories.getAll().then((data) => {
            setCategories(data.categories);
        })
    }, []);

    return (
        <Grid container spacing={5}>
            <Box display="flex" flexDirection="row" justifyContent="flex-end" width={1}>
                <Box>
                    <Button variant="contained" color="primary" component={Link} to="/categories/create">
                        <AddIcon/> Add new
                    </Button>
                </Box>
            </Box>
            <Box display="flex" flexWrap="wrap" marginTop="20px">
                {categories.map((category) =>
                    <Box key={category.id}>
                        <CategoryCard category={category}/>
                    </Box>
                )}
            </Box>
        </Grid>
    );
}

export default Categories;