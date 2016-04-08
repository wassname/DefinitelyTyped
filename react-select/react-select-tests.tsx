/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-select.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Select from "react-select";

// some example values
const options = [{ label: "Bar", value: "bar" }];
const value = [{ label: "Foo", value: "foo", clearableValue: false }];
const func: any = (newValue: any, event: any) => { return; };
const filterOption = (options: ReactSelect.Option, filter: string) => options;
const filterOptions = (options: ReactSelect.Option[], filter: string, currentValues: (string | number)[]) => options;
const newOptionCreator = (input: string) => ({ label: input, value: input });
const loadOptions = (input: string, callback: (options: any[]) => {}) => { };

class SelectTest extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
            <Select
                addLabelText={"string"}
                allowCreate={false}
                autoBlur={false}
                autofocus={false}
                autosize={false}
                backspaceRemoves={false}
                className={"string"}
                clearAllText={"stringOrNode"}
                clearValueText={"stringOrNode"}
                clearable={false}
                delimiter={"string"}
                disabled={false}
                escapeClearsValue={false}
                filterOption={filterOption}
                filterOptions={filterOptions}
                ignoreAccents={false}
                ignoreCase={false}
                inputProps={{}}
                isLoading={false}
                joinValues={false}
                labelKey={"string"}
                loadOptions={loadOptions}
                matchPos={"string"}
                matchProp={"string"}
                menuBuffer={1}
                menuContainerStyle={{}}
                menuRenderer={func}
                menuStyle={{}}
                multi={false}
                name={"string"}
                newOptionCreator={newOptionCreator}
                noResultsText={"stringOrNode"}
                onBlur={func}
                onBlurResetsInput={false}
                onChange={func}
                onClose={func}
                onFocus={func}
                onInputChange={func}
                onMenuScrollToBottom={func}
                onOpen={func}
                onValueClick={func}
                openAfterFocus={false}
                optionClassName={"string"}
                optionComponent={func}
                optionRenderer={func}
                options={options}
                placeholder={"stringOrNode"}
                required={false}
                scrollMenuIntoView={false}
                searchable={false}
                simpleValue={false}
                style={{}}
                tabIndex={"string"}
                value={options}
                valueComponent={func}
                valueKey={"string"}
                valueRenderer={func}
                wrapperStyle={{}}
                />
        </div>;
    }
}

class SelectAsyncTest extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
            <Select.Async
                addLabelText={"string"}
                allowCreate={false}
                autoBlur={false}
                autofocus={false}
                autosize={false}
                backspaceRemoves={false}
                className={"string"}
                clearAllText={"stringOrNode"}
                clearValueText={"stringOrNode"}
                clearable={false}
                delimiter={"string"}
                disabled={false}
                escapeClearsValue={false}
                filterOption={filterOption}
                filterOptions={filterOptions}
                ignoreCase={false}
                inputProps={{}}
                isLoading={false}
                joinValues={false}
                labelKey={"string"}
                matchPos={"string"}
                matchProp={"string"}
                menuBuffer={1}
                menuContainerStyle={{}}
                menuRenderer={func}
                menuStyle={{}}
                multi={false}
                name={"string"}
                newOptionCreator={newOptionCreator}
                noResultsText={"stringOrNode"}
                onBlur={func}
                onBlurResetsInput={false}
                onChange={func}
                onClose={func}
                onFocus={func}
                onInputChange={func}
                onMenuScrollToBottom={func}
                onOpen={func}
                onValueClick={func}
                openAfterFocus={false}
                optionClassName={"string"}
                optionComponent={func}
                optionRenderer={func}
                options={options}
                placeholder={"stringOrNode"}
                required={false}
                scrollMenuIntoView={false}
                searchable={false}
                simpleValue={false}
                style={{}}
                tabIndex={"string"}
                value={options}
                valueComponent={func}
                valueKey={"string"}
                valueRenderer={func}
                wrapperStyle={{}}
                cache={{}}
                loadOptions={loadOptions}
                ignoreAccents={false}
                loadingPlaceholder={"string"}
                />
        </div>;
    }

}
