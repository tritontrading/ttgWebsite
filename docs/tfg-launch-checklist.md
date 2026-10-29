# TFG launch checklist

This PR prepares public-facing copy. It does not authorize a merge, deploy, DNS change, email migration, or legal entity rename.

## Prepared here
- Public name is Triton Finance Group; legal entity remains Triton Trading Group.
- Recruitment stays closed; existing dates are preserved. Stale application-deadline and completed-event location text removed.
- Member Experience replaces Connections with a no-endorsement disclaimer.
- Canonicals, sitemap and robots share NEXT_PUBLIC_SITE_URL. Default remains the currently working old domain. Do not set the new URL until HTTPS and the approved website cutover are ready.
- No new mail addresses, guessed social handles, or replacement logo artwork.

## Before merge/launch
- Owner approval and independent review required. No automatic merge/deploy.
- Validate member roster, titles, LinkedIn links, and a real member/alumnus for each displayed logo. Existing logo list is retained, not certified by this PR.
- Verify California amendment before changing legalName or entity/EIN disclosures.
- Confirm desired recruitment dates; the emailed brief's additional dates conflict with the owner's later instruction that existing dates are correct.
- Obtain an accurate privacy policy based on actual hosting logs, tracking, forms and donor providers. This PR adds an educational disclaimer, not an invented privacy promise or legal terms contract.
- Audit served public/*.html legacy pages separately. They are not globally rewritten here: a blind replacement could alter historical/legal claims and fabricate working new email addresses.
- Existing logo image still bears historical artwork. Get approved TFG assets for favicon and social image. Current social image uses the existing logo with updated public alt text.

## Website-only cutover
1. Verify Cloudflare and Railway account state and current DNS. Add tritonfinance.org to the existing Railway service, confirm HTTPS, then set NEXT_PUBLIC_SITE_URL=https://tritonfinance.org and rebuild.
2. Add tritonfinance.org as an alias domain in existing Workspace; verify MX/SPF/DKIM/DMARC and send/receive before publishing addresses. Do not rename primary accounts as part of this PR.
3. Update footer website/contact values only after those routes work.
4. Configure permanent path/query-preserving redirects for old public apex/www. Exclude internal.tritontradinggroup.org and retain mail records. Verify actual 301 status, representative paths and query strings, and no loops.
5. Verify both Search Console properties, submit sitemap and Change of Address, update Analytics if used.
6. Keep old domain and redirects long-term (at least one year). Record rollback DNS/host settings before cutover.

## Deferred
Validated member/logo changes, privacy/terms, dated organization history, case studies, quant outputs, research archive, approved brand assets, legacy HTML and actual infrastructure cutover.
