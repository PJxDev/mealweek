import JsPDF from 'jspdf'

import { toPng } from 'html-to-image'

const PDFButton = ({ refs }) => {
  const generateImage = async () => {
    const image = await toPng(refs.planning.current, { quality: 1 })
    const doc = new JsPDF({ format: 'a4', orientation: 'l' })

    doc.addImage(image, 'JPEG', 5, 22, 230, 165)

    doc.save('MelaWeek-Planning.pdf')
  }
  return (
    <div className='button-container'>
      <button
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
        onClick={generateImage}
      >
        Download PDF
      </button>
    </div>
  )
}

export default PDFButton
