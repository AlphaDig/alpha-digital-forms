export function generateServiceReportEmail(data: any, signatureImage?: string) {
  const {
    customer,
    address,
    contactPerson,
    email,
    telephone,
    faultComplaint,
    serviceTrainingReport,
    serviceType = [],
    serviceStatus = [],
    serviceCharge,
    remarks,
    personInCharge,
    coordinates
  } = data;

  // Handle array data (checkboxes)
  const serviceTypes = Array.isArray(serviceType) ? serviceType : [serviceType].filter(Boolean);
  const serviceStatuses = Array.isArray(serviceStatus) ? serviceStatus : [serviceStatus].filter(Boolean);

  const photoKeys = Object.keys(data).filter(
    (k) => k.startsWith('photo-') && typeof data[k] === 'string' && data[k].startsWith('data:image/')
  );

  const photoSection =
    photoKeys.length > 0
      ? `
      <div class="section">
          <div class="section-title">Attached Photos</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">
              ${photoKeys
                .map(
                  (k) =>
                    `<img src="${data[k]}" alt="${k}" style="width:100%;border-radius:8px;border:1px solid #ccc;" />`
                )
                .join('')}
          </div>
      </div>`
      : '';
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Report - ${customer}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header .subtitle {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 20px;
        }
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .section-title {
            color: #1e3a8a;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
            border-left: 4px solid #3b82f6;
            padding-left: 12px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .info-item {
            margin-bottom: 12px;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 4px;
            font-size: 14px;
        }
        .info-value {
            color: #333;
            background: #f8fafc;
            padding: 8px 12px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
        }
        .checkbox-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 8px;
        }
        .checkbox-item {
            background: #e0f2fe;
            color: #0369a1;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
        }
        .signature-container {
            text-align: center;
            margin: 20px 0;
        }
        .signature-image {
            max-width: 300px;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            background: white;
        }
        .footer {
            background: #f8fafc;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eaeaea;
            color: #666;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SERVICE REPORT</h1>
            <div class="subtitle">Alpha Digital Company</div>
        </div>
        
        <div class="content">
            <!-- Basic Information -->
            <div class="section">
                <div class="section-title">Basic Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Date & Time</div>
                        <div class="info-value">${new Date().toLocaleString('en-GB')}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Customer</div>
                        <div class="info-value">${customer || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Contact Person</div>
                        <div class="info-value">${contactPerson || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email</div>
                        <div class="info-value">${email || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Telephone</div>
                        <div class="info-value">${telephone || 'Not provided'}</div>
                    </div>
                </div>
            </div>

            <!-- Address -->
            <div class="section">
                <div class="section-title">Address</div>
                <div class="info-value">${address || 'Not provided'}</div>
            </div>

            <!-- Fault Complaint -->
            <div class="section">
                <div class="section-title">Fault Complaint</div>
                <div class="info-value" style="white-space: pre-wrap;">${faultComplaint || 'Not provided'}</div>
            </div>

            <!-- Service Details -->
            <div class="section">
                <div class="section-title">Service Details</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Service/Training Report</div>
                        <div class="info-value" style="white-space: pre-wrap;">${serviceTrainingReport || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Service Charge</div>
                        <div class="info-value">RM ${serviceCharge || '0'}</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-label">Type of Service</div>
                    ${serviceTypes.length > 0 ? `
                        <div class="checkbox-list">
                            ${serviceTypes.map((type: string) => `
                                <div class="checkbox-item">${type}</div>
                            `).join('')}
                        </div>
                    ` : '<div class="info-value">Not specified</div>'}
                </div>
                
                <div class="info-item">
                    <div class="info-label">Service Status</div>
                    ${serviceStatuses.length > 0 ? `
                        <div class="checkbox-list">
                            ${serviceStatuses.map((status: string) => `
                                <div class="checkbox-item">${status}</div>
                            `).join('')}
                        </div>
                    ` : '<div class="info-value">Not specified</div>'}
                </div>
            </div>

            <!-- Personnel & Location -->
            <div class="section">
                <div class="section-title">Personnel & Location</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Person In Charge</div>
                        <div class="info-value">${personInCharge || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Location Coordinates</div>
                        <div class="info-value">${coordinates || 'Not provided'}</div>
                    </div>
                </div>
            </div>

            <!-- Remarks -->
            ${remarks ? `
            <div class="section">
                <div class="section-title">Remarks</div>
                <div class="info-value" style="white-space: pre-wrap;">${remarks}</div>
            </div>
            ` : ''}
        

            <!-- Customer Signature -->
            ${signatureImage ? `
            <div class="section">
                <div class="section-title">Customer Signature</div>
                <div class="signature-container">
                    <img src="${signatureImage}" alt="Customer Signature" class="signature-image" />
                </div>
            </div>
            ` : ''}

            ${photoSection}
        </div>

        
        
        <div class="footer">
            <p>This service report was generated automatically by Alpha Digital Company's system.</p>
            <p>© ${new Date().getFullYear()} Alpha Digital Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}