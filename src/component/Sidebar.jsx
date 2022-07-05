import SwitchOrgIcon from "../assets/sidebar/switch_org.png";
import DownArrow from "../assets/sidebar/arrow_down.png";
import Dashboard from "../assets/sidebar/dashboard.png";
import Users from "../assets/sidebar/users.png";
import Guarantors from "../assets/sidebar/guarantors.png";
import Loan from "../assets/sidebar/loan.png";
import Decision_models from "../assets/sidebar/decision_models.png";
import Savings from "../assets/sidebar/savings.png";
import Loan_request from "../assets/sidebar/loan_request.png";
import White_list from "../assets/sidebar/white_list.png";
import Karma from "../assets/sidebar/karma.png";
import organization from "../assets/sidebar/organization.png";
import loanProducts from "../assets/sidebar/loan-products.png";
import savingProducts from "../assets/sidebar/saving-products.png";
import feesCharges from "../assets/sidebar/fees-charges.png";
import transaction from "../assets/sidebar/transaction.png";
import services from "../assets/sidebar/services.png";
import serviceAcc from "../assets/sidebar/service-acc.png";
import settlements from "../assets/sidebar/settlements.png";
import report from "../assets/sidebar/report.png";

import Preferences from "../assets/sidebar/preferences.png";
import feesPricing from "../assets/sidebar/fees-pricing.png";
import auditLogs from "../assets/sidebar/audit-logs.png";
import systemsMessages from "../assets/sidebar/systems-messages.png";
import logOut from "../assets/sidebar/log-out.png";

function Sidebar({ display }) {
  return (
    <div className={`Sidebar ${display ? "" : "none"}`}>
      <div className="switch-org">
        <span className="icon-before">
          <img src={SwitchOrgIcon} alt="icon" />
        </span>
        <h3 className="sidebar-text">Switch Organization</h3>
        <span className="icon-after">
          <img src={DownArrow} alt="icon" />
        </span>
      </div>

      <div className="dashboard">
        <span>
          <img src={Dashboard} alt="icon" />
        </span>
        <h3 className="sidebar-text">Dashboard</h3>
      </div>

      <h3 className="sub-header">CUSTOMERS</h3>

      <div>
        <span>
          <img src={Guarantors} alt="icon" />
        </span>
        <h3 className="sidebar-text">Guarantors</h3>
      </div>

      <div>
        <span>
          <img src={Loan} alt="icon" />
        </span>
        <h3 className="sidebar-text">Loan</h3>
      </div>

      <div>
        <span>
          <img src={Decision_models} alt="icon" />
        </span>
        <h3 className="sidebar-text">Decision Models</h3>
      </div>

      <div>
        <span>
          <img src={Savings} alt="icon" />
        </span>
        <h3 className="sidebar-text">Savings</h3>
      </div>

      <div>
        <span>
          <img src={Loan_request} alt="icon" />
        </span>
        <h3 className="sidebar-text">Loan Request</h3>
      </div>

      <div>
        <span>
          <img src={White_list} alt="icon" />
        </span>
        <h3 className="sidebar-text">White List </h3>
      </div>

      <div>
        <span>
          <img src={Karma} alt="icon" />
        </span>
        <h3 className="sidebar-text">Karma</h3>
      </div>

      <h3 className="sub-header">BUSINESSES</h3>

      <div>
        <span>
          <img src={organization} alt="icon" />
        </span>
        <h3 className="sidebar-text">Organization</h3>
      </div>

      <div>
        <span>
          <img src={loanProducts} alt="icon" />
        </span>
        <h3 className="sidebar-text">Loan Product</h3>
      </div>

      <div>
        <span>
          <img src={savingProducts} alt="icon" />
        </span>
        <h3 className="sidebar-text">Savings Product</h3>
      </div>

      <div>
        <span>
          <img src={feesCharges} alt="icon" />
        </span>
        <h3 className="sidebar-text">Fees and Charges</h3>
      </div>

      <div>
        <span>
          <img src={transaction} alt="icon" />
        </span>
        <h3 className="sidebar-text">Transactions</h3>
      </div>

      <div>
        <span>
          <img src={services} alt="icon" />
        </span>
        <h3 className="sidebar-text">Services</h3>
      </div>

      <div>
        <span>
          <img src={serviceAcc} alt="icon" />
        </span>
        <h3 className="sidebar-text">Service Account</h3>
      </div>

      <div>
        <span>
          <img src={settlements} alt="icon" />
        </span>
        <h3 className="sidebar-text">Settlements</h3>
      </div>

      <div>
        <span>
          <img src={report} alt="icon" />
        </span>
        <h3 className="sidebar-text">Reports</h3>
      </div>

      <h3 className="sub-header">SETTINGS</h3>

      <div>
        <span>
          <img src={Preferences} alt="icon" />
        </span>
        <h3 className="sidebar-text">Preferences</h3>
      </div>

      <div>
        <span>
          <img src={feesPricing} alt="icon" />
        </span>
        <h3 className="sidebar-text">Fees and Pricing</h3>
      </div>

      <div>
        <span>
          <img src={auditLogs} alt="icon" />
        </span>
        <h3 className="sidebar-text">Audit Logs</h3>
      </div>

      <div>
        <span>
          <img src={systemsMessages} alt="icon" />
        </span>
        <h3 className="sidebar-text">Systems Messages</h3>
      </div>

      <div className="log-out">
        <span>
          <img src={logOut} alt="icon" />
        </span>
        <a href="/">
          <h3 className="sidebar-text">Logout</h3>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
