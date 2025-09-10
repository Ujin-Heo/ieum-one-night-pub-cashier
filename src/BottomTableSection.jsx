import CustomerTable from './CustomerTable';
import "./TableSections.css";

function BottomTableSection({ tables, updateCallback: updateCallbackProp }) {

    return (
        <div className="BottomTableSection">
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[28]} tableNum={28} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[26]} tableNum={26} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[18]} tableNum={18} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[23]} tableNum={23} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[25]} tableNum={25} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[24]} tableNum={24} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[27]} tableNum={27} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[999]} tableNum={999} updateCallback={updateCallbackProp} />
            </div>
        </div>
    )
}

export default BottomTableSection;