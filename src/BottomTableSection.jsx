import CustomerTable from './CustomerTable';
import "./TableSections.css";

function BottomTableSection() {

    return (
        <div className="BottomTableSection">
            <div className="table-group-horizontal">
                <CustomerTable tableNum="28" />
                <CustomerTable tableNum="29" />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableNum="30" />
                <CustomerTable tableNum="31" />
            </div>
            <div className="table-group-horizontal">
                <CustomerTable tableNum="32" isShort={true} />
                <CustomerTable tableNum="33" />
            </div>
        </div>
    )
}

export default BottomTableSection;