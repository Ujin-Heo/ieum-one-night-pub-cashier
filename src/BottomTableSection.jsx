import CustomerTable from './CustomerTable';
import "./TableSections.css";

function BottomTableSection({ tables, updateCallback: updateCallbackProp }) {

    return (
        <div className="BottomTableSection">
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[28]} tableNum={28} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[29]} tableNum={29} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[30]} tableNum={30} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[31]} tableNum={31} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[32]} tableNum={32} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[33]} tableNum={33} updateCallback={updateCallbackProp} />
            </div>
        </div>
    )
}

export default BottomTableSection;