import PropTypes from "prop-types";
import {Box, Card, CardActions, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 17,
        wordWrap: "break-word",
        wordBreak: "break-all"
    },
    cardContent: {
        height: 260
    }
}));

const CategoryCard = (props) => {
    const classes = useStyles();
    const {category} = props;

    return (
        <Box width={240} height={360} marginLeft="20px" marginTop="20px">
            <Card className={classes.root}>
                <CardHeader classes={{title: classes.title}} title={category.name}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" component={Link} to={`/categories/${category.id}`}>
                        <EditIcon fontSize="small"/> Edit
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryCard;