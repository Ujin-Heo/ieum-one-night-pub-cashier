import CustomerTable from './CustomerTable';
import "./TableSections.css";

function TopTableSection({ tables, updateCallback: updateCallbackProp }) {

    return (
        <div className="topTableSection">
            <div className="table-group">
                <CustomerTable tableInfo={tables[1]} tableNum={1} ordered={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[2]} tableNum={2} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[3]} tableNum={3} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[4]} tableNum={4} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[5]} tableNum={5} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[6]} tableNum={6} isShort={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[7]} tableNum={7} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[8]} tableNum={8} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[9]} tableNum={9} isShort={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[10]} tableNum={10} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[11]} tableNum={11} isShort={true} ordered={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[12]} tableNum={12} isShort={true} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[13]} tableNum={13} isShort={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[14]} tableNum={14} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[15]} tableNum={15} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[16]} tableNum={16} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[17]} tableNum={17} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[18]} tableNum={18} isShort={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[19]} tableNum={19} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[20]} tableNum={20} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[21]} tableNum={21} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[22]} tableNum={22} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[23]} tableNum={23} isShort={true} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[24]} tableNum={24} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[25]} tableNum={25} updateCallback={updateCallbackProp} />
            </div>
            <div className="table-group">
                <CustomerTable tableInfo={tables[26]} tableNum={26} updateCallback={updateCallbackProp} />
                <CustomerTable tableInfo={tables[27]} tableNum={27} updateCallback={updateCallbackProp} />
            </div>
        </div>
    )
}

export default TopTableSection;