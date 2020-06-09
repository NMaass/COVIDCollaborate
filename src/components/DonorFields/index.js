import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import {InputLabel} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";

const tools = [
    '3-D Printer',
    'Commercial Masks',
    'Commercial Scrubs',
    'Gloves',
    'Needle and Cloth'
];
export default function DonorFields() {
    const [userTool, setUserTool] = React.useState([]);

    const handleChange = event => {
        setUserTool(event.target.value);
    };

    const handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setUserTool(value);
    };
    return(
        <div>
            <FormControl>
                <InputLabel>Which resources do you have access to?</InputLabel>
                <Select
                    className="chips"
                    multiple
                    value={userTool}
                    onChange={handleChange}
                    input={<Input/>}
                    renderValue={selected => (
                        <div>
                            {selected.map(value => (
                                <Chip key = {value} label = {value} />
                            ))}
                        </div>
                    )}
                >
                    {tools.map(tool => (
                        <MenuItem key = {tool} value={tool}>
                            {tool}
                        </MenuItem>
                    ))}
                    }
                </Select>
            </FormControl>
        </div>
    )
}
