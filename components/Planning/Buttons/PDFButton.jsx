import {
  PDFDownloadLink,
  View,
  Page,
  Text,
  Document,
  StyleSheet
} from '@react-pdf/renderer'

export default function PDFButton() {
  const sheet = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  })

  const MyDocument = () => (
    <Document>
      <Page size='A4' style={sheet.page}>
        <View style={sheet.section}>
          <Text>Planning</Text>
          <Text>{data}</Text>
        </View>
        <View style={sheet.section}>
          <Text>Shopping List</Text>
        </View>
      </Page>
    </Document>
  )

  return (
    <PDFDownloadLink
      document={
        <MyDocument
          data={{
            libro: {
              titulo: 'PLANNING',
              subtitulo: 'from MEALWEEK'
            }
          }}
        />
      }
      fileName='planning.pdf'
      style={{
        textDecoration: 'none',
        backgroundColor: 'var(--color-primary)',
        width: '10rem',
        padding: '0.7rem',
        fontFamily: 'Itim',
        fontSize: '1.5rem',
        lineHeight: '1.2',
        textAlign: 'center',
        color: '#fff',
        border: '1px solid #4a4a4a'
      }}
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download Pdf'
      }
    </PDFDownloadLink>
  )
}
