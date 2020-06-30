import { css } from '@emotion/core'
import * as React from 'react'
import Box from 'src/components/Box'
import * as Form from 'src/components/Form'
import { ExternalLink } from 'src/components/Link'
import Navbar from 'src/components/Navbar'
import * as Text from 'src/components/Text'
import { cityToEmails, getEmailsForCity } from 'src/data/cityData'
import * as emailData from 'src/data/email'
import { colors, typography } from 'src/styles'
import { makeMailToLink } from 'src/utils/mailto'

const sjEmailBody = `Hello, 
 
My name is [INSERT NAME], and I am a resident of San José, CA. I am emailing today to demand justice for Gregory Johnson Jr. On Nov. 22, 2008, Gregory Johnson Jr was reported found hanging from a pipe in the Sigma Chi fraternity where he lived. No adequate investigation of Johnson’s death occurred. As the house was connected to San José State University, the campus police -ill-equipped to investigate a possible murder–took charge.  They never called on the San Jose police. Campus cops made inquiries only when pressured by Johnson’s mother, Denise Johnson, delaying most significant interviews until February 2009.  
 
Questions asked of witnesses were designed to buttress the suicide theory. Suspicion also arose about the autopsy.  Although bags were placed on Johnson’s hands, the bags were discarded at the autopsy.  Also, the report does not indicate that any x-rays were taken. Denise said her son’s skull was cracked, and there were no ligature marks on his neck.The campus police report that Johnson (6’2” tall) was hanging from a pipe which is only 5’10” high.  The family feels suicide was impossible, as Johnson  was supposedly found in a seated position, his buttocks only 6” off the floor.Like any mother, Denise struggles to find out what happened.  The campus police provided a copy of their report—with several pages and all photographs missing.  The autopsy report was provided—again no photographs.  The FBI checked on the case but took no action.  Denise tried to obtain FBI reports.  Although the FBI told her there were 300 pages, she received only ten.  
 
This mother deserves answers and a real investigation. Johnson had no indications of being suicidal, had no history of any mental illness and left no suicide note. SJSU, SJPD, and Sigma Chi still rule his death a suicide and have insisted that his family not pursue the case further. Police reports were inconsistent and police did not pursue the case even though there was a flurry of details that were inconsistent and suspicious. 
 
The people demand that the case is reopened in order to serve justice for Gregory Johnson Jr. The Johnson family has waited 12 years for justice and closure, and we the people demand that they do not have to wait any longer. 
 
 Thank you for your time, 
 [INSERT NAME]  
 
 Linked below is a petition started on June 9th that has over 55,000 signatures and counting:
 https://www.change.org/p/gavin-newsom-justice-for-gregory-johnson-jr?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=b45fe7f0-c647-11e5-9785-4d8b40243629`

const SJEmail2 = () => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflowX="hidden"
      bg="black"
      py={4}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Navbar />
      <Box
        container={{
          _: { maxWidth: '90%' },
          lg: { maxWidth: '50em' },
        }}
      >
        <Box
          width="100%"
          pt={{ _: 2, md: 2 }}
          pb={{ _: 3, md: 4 }}
          display="flex"
          flexDirection="column"
        >
          <Text.Heading color="white" fontWeight={700} mb={3}>
            Justice for Gregory Johnson Jr
          </Text.Heading>

          <Text.Body color="white" mb={3}>
            The city of San José has not made adequate attempts at investigating
            the suspicious circumstances of Gregory Johnson Jr. This is
            unacceptable. Demand justice for Gregory and his family by sending
            an email to SJ city officials below.
          </Text.Body>

          <Box mt={4}>
            <ExternalLink
              asButton
              noUnderline
              target="_blank"
              buttonStyle="primary"
              href={makeMailToLink({
                to: [
                  'mayoremail@sanjoseca.gov, district3@sanjoseca.gov, mary.papazian@sjsu.edu, jrosen@dao.sccgov.org, justin.celano@sjsu.edu, 3102@sanjoseca.gov, sjsupres@sjsu.edu',
                ],
                subject: '[**INSERT UNIQUE SUBJECT LINE**]',
                body: sjEmailBody,
              })}
            >
              Send email to San Jose officials
            </ExternalLink>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default SJEmail2
