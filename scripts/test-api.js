const http = require("http");

const domain = "localhost:3000";
const url = `http://${domain}/api/send-enquiry`;

async function testRequest(payload, description) {
  console.log(`Testing: ${description}`);
  const data = JSON.stringify(payload);

  return new Promise((resolve) => {
    const req = http.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
          Origin: `http://${domain}`,
          Host: domain,
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          console.log(`Status: ${res.statusCode}`);
          console.log(`Response: ${body}`);
          console.log("---");
          resolve();
        });
      },
    );

    req.on("error", (e) => {
      console.error(`Error: ${e.message}`);
      resolve();
    });

    req.write(data);
    req.end();
  });
}

async function runTests() {
  // 1. Valid submission (wait 4s to pass time check)
  console.log("Waiting 4 seconds for valid test...");
  await new Promise((r) => setTimeout(r, 4000));
  await testRequest(
    {
      firstName: "Jason",
      lastName: "Huisman",
      province: "Gauteng",
      phone: "0123456789",
      email: "test@example.com",
      enquiryType: "General",
      message: "Hello world",
      loadTimestamp: Date.now() - 4000,
    },
    "Valid Submission",
  );

  // 2. Honeypot check
  await testRequest(
    {
      firstName: "Bot",
      lastName: "User",
      province: "Gauteng",
      phone: "0123456789",
      email: "bot@example.com",
      enquiryType: "General",
      message: "I am a bot",
      hp_field: "something",
      loadTimestamp: Date.now() - 4000,
    },
    "Honeypot Triggered",
  );

  // 3. Name without vowels
  await testRequest(
    {
      firstName: "TFLGgDpf",
      lastName: "PtSqzbZn",
      province: "Gauteng",
      phone: "0123456789",
      email: "bot@example.com",
      enquiryType: "General",
      message: "I am a bot",
      loadTimestamp: Date.now() - 4000,
    },
    "Name without vowels",
  );

  // 4. Name with numbers
  await testRequest(
    {
      firstName: "Jason123",
      lastName: "Huisman",
      province: "Gauteng",
      phone: "0123456789",
      email: "bot@example.com",
      enquiryType: "General",
      message: "I am a bot",
      loadTimestamp: Date.now() - 4000,
    },
    "Name with numbers",
  );

  // 5. Name with too many uppercase
  await testRequest(
    {
      firstName: "JASON",
      lastName: "HUISMAN",
      province: "Gauteng",
      phone: "0123456789",
      email: "bot@example.com",
      enquiryType: "General",
      message: "I am a bot",
      loadTimestamp: Date.now() - 4000,
    },
    "Name with >3 consecutive uppercase",
  );

  // 6. Fast submission
  await testRequest(
    {
      firstName: "Jason",
      lastName: "Huisman",
      province: "Gauteng",
      phone: "0123456789",
      email: "test@example.com",
      enquiryType: "General",
      message: "Fast",
      loadTimestamp: Date.now() - 500,
    },
    "Fast submission (<3s)",
  );

  // 7. Missing enquiry type
  await testRequest(
    {
      firstName: "Jason",
      lastName: "Huisman",
      province: "Gauteng",
      phone: "0123456789",
      email: "test@example.com",
      enquiryType: "",
      message: "Missing type",
      loadTimestamp: Date.now() - 4000,
    },
    "Missing enquiry type",
  );
}

runTests();
