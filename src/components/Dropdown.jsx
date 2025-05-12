import React, { useState } from 'react';
import { 
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Box
} from '@mui/material';

const Dropdown = ({ 
    label = "Select an option",
    options = [],
    value = "",
    onChange,
    width = "200px",
    required = false
}) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <Box sx={{ minWidth: width }}>
            <FormControl fullWidth required={required}>
                <InputLabel id="dropdown-label">{label}</InputLabel>
                <Select
                    labelId="dropdown-label"
                    id="dropdown-select"
                    value={selectedValue}
                    label={label}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#004080',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#FFA500',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#FFA500',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem 
                            key={option.value} 
                            value={option.value}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#f5f5f5',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#e3f2fd',
                                    '&:hover': {
                                        backgroundColor: '#bbdefb',
                                    },
                                },
                            }}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown; 