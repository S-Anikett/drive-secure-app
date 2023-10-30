const controls = [
    {
        name: 'name',
        label: 'Name',
        placeholder: 'Name...',
    },
    {
        name: 'email',
        label: 'email',
        type: 'email',
        placeholder: 'email...',
    },
    {
        name: 'gender',
        label: 'Gender',
        inputType: 'select',
        options: [
            {label: 'Male', value: 'Male'},
            {label: 'Female', value: 'Female'},
            {label: 'Other', value: 'Other'},
        ],
    },

    {
        name: 'country',
        label: 'Country',
        inputType: 'select',
        options: [
            {label: 'USA', value: 'USA'},
            {label: 'India', value: 'India'},
            {label: 'Other', value: 'other'},
        ],
    },
    {
        name: 'birth_date',
        label: 'Date of Birth',
        inputType: 'date',
    },
];

export default controls;
