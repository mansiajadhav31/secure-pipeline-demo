#!/bin/bash

echo "==================================="
echo "Security Scan Summary Report"
echo "==================================="
echo ""

echo "1. SAST Results (SonarQube):"
echo " - Check: https://sonarcloud.io/project/overview?id=YOUR_PROJECT_KEY"
echo ""

echo "2. SCA Results (npm audit):"
npm audit --production --json > sca-report.json
echo " - Report saved to: sca-report.json"
echo ""

echo "3. DAST Results (OWASP ZAP):"
echo " - Download from GitHub Actions artifacts"
echo ""

echo "4. Container Scan (Trivy):"
echo " - Check GitHub Security tab for findings"
echo ""

echo "==================================="
echo "Report generation completed!"


#!/bin/bash
echo "Running security report..."
zap-cli quick-scan