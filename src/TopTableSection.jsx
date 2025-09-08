import CustomerTable from './CustomerTable';
import "./TableSections.css";

function TopTableSection({ tables }) {

    return (
        <div className="topTableSection">
            <div className="table-group">
                <CustomerTable tableInfo={tables[1]} tableNum={1} ordered={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[2]} tableNum={2} />
                <CustomerTable tableInfo={tables[3]} tableNum={3} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[4]} tableNum={4} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[5]} tableNum={5} isShort={true} />
                <CustomerTable tableInfo={tables[6]} tableNum={6} isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[7]} tableNum={7} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[8]} tableNum={8} />
                <CustomerTable tableInfo={tables[9]} tableNum={9} isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[10]} tableNum={10} isShort={true} />
                <CustomerTable tableInfo={tables[11]} tableNum={11} isShort={true} ordered={true} />
                <CustomerTable tableInfo={tables[12]} tableNum={12} isShort={true} />
                <CustomerTable tableInfo={tables[13]} tableNum={13} isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[14]} tableNum={14} />
                <CustomerTable tableInfo={tables[15]} tableNum={15} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[16]} tableNum={16} />
                <CustomerTable tableInfo={tables[17]} tableNum={17} />
                <CustomerTable tableInfo={tables[18]} tableNum={18} isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[19]} tableNum={19} />
                <CustomerTable tableInfo={tables[20]} tableNum={20} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[21]} tableNum={21} />
                <CustomerTable tableInfo={tables[22]} tableNum={22} />
                <CustomerTable tableInfo={tables[23]} tableNum={23} isShort={true} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[24]} tableNum={24} />
                <CustomerTable tableInfo={tables[25]} tableNum={25} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[26]} tableNum={26} />
                <CustomerTable tableInfo={tables[27]} tableNum={27} />
            </div>
        </div>
    )
}

export default TopTableSection;