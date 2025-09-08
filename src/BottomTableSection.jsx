import CustomerTable from './CustomerTable';
import "./TableSections.css";

function BottomTableSection({ tables }) {

    return (
        <div className="BottomTableSection">
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[28]} tableNum={28} />
                <CustomerTable tableInfo={tables[29]} tableNum={29} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[30]} tableNum={30} />
                <CustomerTable tableInfo={tables[31]} tableNum={31} />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableInfo={tables[32]} tableNum={32} isShort={true} />
                <CustomerTable tableInfo={tables[33]} tableNum={33} />
            </div>
        </div>
    )
}

export default BottomTableSection;