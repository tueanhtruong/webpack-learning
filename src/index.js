import Handlebars from "handlebars";

const template1 = `<div class="container">
<!-- header -->
<div class="header">
  <div class="header--info">
    <h2 class="text-primary text-font-primary mb-1">Credit Memorandum</h2>
    <h4 class="text-primary text-font-sub">
      CM No. CM-22-11 <br />
      Date: {{date}}
    </h4>
  </div>
  <div class="header--logo">
    <img
      src={{imgUrl}}
      style="width: 172.999px; height: 52.621px"
    />
  </div>
</div>
<!-- General Information -->
<div class="info">
  <div class="text-font-title text-primary-200">General Information</div>
  <div class="view-item">
    <div class="view-item__label">Company Name </div>
    <div class="view-item__value">{{companyName}}</div>
  </div>
  <div class="view-item">
    <div class="view-item__label">Agent Name</div>
    <div class="view-item__value">{{agentName}}</div>
  </div>
  <div class="view-item">
    <div class="view-item__label">Agent Address</div>
    <div class="view-item__value">{{agentAddress}}</div>
  </div>
</div>

<!-- Refund information -->
<div class="info">
  <div class="text-font-title text-primary-200">Refund Information</div>

  <table style="margin-bottom: 16px">
    <thead>
      <tr>
        <th>Description Refund Amount</th>
        <th>Refund Amount</th>
      </tr>
    </thead>
    <tbody>
      <!-- {{#each tableData}} -->
      <tr>
        <td>
          <p style="margin: 8px 0">REFUND DUE</p>
          <br />
          <br />
          <p style="margin: 8px 0">
            Refund fees, request to withdraw the following applications:
          </p>
          <p style="white-space: pre-line; line-height: 2">
            {{this.applicationName}}
          </p>
          <br />
          <br />
          <p style="margin: 8px 0">Account: {{this.accountNumber}}</p>

          <br />
          <br />

          <p style="margin: 8px 0">Deposit Slip #: {{this.depositSlip}}</p>
          <p style="margin: 8px 0">Deposit Slip Date: {{this.depositSlipDate}}</p>
          <br />
          <br />
          <p style="margin: 8px 0; font-weight: 600">Check #: {{checkNumber}}</p>
          <p style="margin: 8px 0; font-weight: 600">Check Date: {{checkDate}}</p>
          <p style="margin: 8px 0; font-weight: 600">Mailed: {{mailed}}</p>
          <br />
          <br />
        </td>
        <td>{{this.price}}</td>
      </tr>
      <!-- {{/each}} -->
    </tbody>
  </table>
</div>

<div class="footer info">
  <div class="footer--left">
    <h4 class="text-gray-700">P-85</h4>
    <span class="text-gray-500">07/12/2023</span>
  </div>
  <div class="footer--right">
    <h4 class="text-gray-700">Pesticide Branch</h4>
    <p class="text-gray-500">{{mailingAddress}}</p>
    <p class="text-gray-500">{{state}}, {{city}}, {{zipCode}}</p>
  </div>
</div>
</div>`;

const template1Func = Handlebars.compile(template1);
const tableData = [
  {
    name: "Kroger Pet Pride Flea Spray 45-68 lbs",
    epaNumber: "1234567wqeqwe890",
    applicationName: [
      "TrueLiving Cleaner with Bleach, EPA Reg. No. 70271-15-96374, 12345",
      "TrueLiving Cleaner with Bleach, EPA Reg. No. 70271-15-96374, 12345",
      "TrueLiving Cleaner with Bleach, EPA Reg. No. 70271-15-96374, 12345",
      "TrueLiving Cleaner with Bleach, EPA Reg. No. 70271-15-96374, 12345",
      "TrueLiving Cleaner with Bleach, EPA Reg. No. 70271-15-96374, 12345",
    ].join("\n"),
    accountNumber: "0964",
    depositSlip: "12345",
    depositSlipDate: " 01/26/2022",
    company: "Datahouse Asia",
    price: "$930",
    checkNumber: "1234474",
    checkDate: "30/08/2022",
    mailed: "dung_do@datahouse.com",
  },
];
const temp1obj1 = {
  imgUrl:
    "https://pesticides-web-storage-develop.s3.us-west-2.amazonaws.com/public/logo-splash.svg",
  date: "5/9/2023 1:23:59 PM",
  tableData,
  companyName: "Data House",
  agentName: "Dung Do",
  agentAddress: "Da Nang",
  mailingAddress: "1428 South King Street",
  state: "1428 South King Street",
  city: "Hawaii ",
  zipCode: "96814",
};

const temp1FromObj1 = template1Func(temp1obj1);
document.querySelector("#template1area").innerHTML = temp1FromObj1;
