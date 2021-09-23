import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            {/*Поиск*/}
            <MyInput
                value={filter.query}
                placeholder={'Search...'}
                onChange={event => setFilter({...filter, query: event.target.value})}/>
            {/*Сортировка*/}
            <MySelect
                value={filter.sort}
                defaultVal={'Filter'}
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By context'}

                ]}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;