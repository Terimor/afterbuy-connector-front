import {useParams} from "react-router";
import {useEffect, useState} from "react";
import Api from '../../api';
import {Box, Button, TextField} from "@material-ui/core";
import EnhancedTable from "../../components/enhanced-table";
import {columns, flattenRules} from '../../utils/category-rules-table.util';
import {defaultCategory, defaultRule} from "../../constants/category.const";
import RuleEditModal from "./components/RuleEditModal";

const CategoryForm = () => {
    const {id} = useParams();
    const [category, setCategory] = useState(defaultCategory);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [editingRule, setEditingRule] = useState(null);

    const handleSetCategoryName = (event) => {
        setCategory({...category, name: event.target.value});
    }

    const handleEditClick = (editingRuleId) => {
        const ruleToEdit = category.rules.find((elem) => elem.id === editingRuleId);
        setEditingRule(ruleToEdit);
    }

    const handleCloseModal = () => {
        setEditingRule(null);
    }

    const handleSaveRule = (editedRule) => {
        let newRules;
        if (editedRule.id) {
            newRules = category.rules.map((elem) => elem.id === editedRule.id ? editedRule : elem);
        } else {
            newRules = [...category.rules, editedRule];
        }
        setCategory({...category, rules: newRules});
        setEditingRule(null);
    }

    const handleAddRuleClick = () => {
        setEditingRule(defaultRule);
    }

    useEffect(() => {
        Api.categories.get(id).then((data) => {
            setCategory(data.category);
        })
    }, [id]);

    return (
        <Box>
            <TextField value={category.name} onChange={handleSetCategoryName}/>
            <EnhancedTable
                rows={flattenRules(category.rules, handleEditClick)}
                columns={columns}
                order={order}
                setOrder={setOrder}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                selected={selected}
                setSelected={setSelected}
                page={page} setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                tableHeaderText="Rules"
            />
            <Box display="flex" justifyContent="flex-end">
                <Box>
                    <Button variant="contained" color="secondary" onClick={handleAddRuleClick}>
                        Add rule
                    </Button>
                </Box>
                <Box marginLeft="10px">
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            </Box>
            <RuleEditModal open={!!editingRule} closeModal={handleCloseModal} saveRule={handleSaveRule} rule={editingRule}/>
        </Box>
    );
}

export default CategoryForm;