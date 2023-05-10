import JsPDF from 'jspdf'

import { toPng } from 'html-to-image'

const PDFButton = ({ refs }) => {
  const generateImage = async () => {
    let aspectratio = 1
    let windowOrientation = 'l'

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      windowOrientation = window.screen.orientation.type.includes('landscape')
        ? 'l'
        : 'p'
      aspectratio = windowWidth / windowHeight
    }
    const image = await toPng(refs.planning.current, { quality: 1 })
    const doc = new JsPDF({ format: 'a4', orientation: windowOrientation })

    const w = doc.internal.pageSize.getWidth()
    const h = w / aspectratio

    doc.text('MEALWEEK - PLANNING', (w / 100) * 40, 10)

    doc.addImage(image, 'JPEG', 3, 50, w - 6, h)

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
          fontFamily: 'var(--font-text)',
          fontSize: '1.5rem',
          lineHeight: '1.2',
          textAlign: 'center',
          color: 'var(--color-font2)',
          border: '1px solid var(color-black)'
        }}
        onClick={generateImage}
      >
        Download PDF
      </button>
    </div>
  )
}

export default PDFButton
