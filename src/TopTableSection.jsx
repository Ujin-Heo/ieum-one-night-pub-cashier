import CustomerTable from './CustomerTable';
import "./TableSections.css";

function TopTableSection() {

    return (
        <div className="topTableSection">
            <div className="table-group">
                <CustomerTable tableNum="01" ordered={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="02" />
                <CustomerTable tableNum="03" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="04" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="05" isShort={true} />
                <CustomerTable tableNum="06" isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="07" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="08" />
                <CustomerTable tableNum="09" isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="10" isShort={true} />
                <CustomerTable tableNum="11" isShort={true} ordered={true} />
                <CustomerTable tableNum="12" isShort={true} />
                <CustomerTable tableNum="13" isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="14" />
                <CustomerTable tableNum="15" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="16" />
                <CustomerTable tableNum="17" />
                <CustomerTable tableNum="18" isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="19" />
                <CustomerTable tableNum="20" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="21" />
                <CustomerTable tableNum="22" />
                <CustomerTable tableNum="23" isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="24" />
                <CustomerTable tableNum="25" />
            </div>
            <div className="table-group">
                <CustomerTable tableNum="26" />
                <CustomerTable tableNum="27" />
            </div>
        </div>
    )
}

export default TopTableSection;