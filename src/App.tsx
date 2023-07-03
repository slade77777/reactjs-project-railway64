import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [
  {
    img: 'https://i1-kinhdoanh.vnecdn.net/2023/07/03/chungkhoan2-1688376716-6266-1688376742.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=C8bfKsfxytPkncS8guvEoQ',
    title: 'Tiền vào bắt đáy các cổ phiếu \'họ APEC\'',
    content: 'Các cổ phiếu "họ APEC" trở thành tâm điểm phiên đầu tuần khi dòng tiền bắt đáy tăng mạnh, với khối lượng khớp lệnh 7-10 triệu cổ phiếu.',
    category: 'Chứng khoán'
  },
  {
    title: 'Giá xăng giảm gần 600 đồng một lít',
    content: 'Xăng RON 95-III giảm 590 đồng, E5 RON 92 hạ 400 đồng, các mặt hàng dầu (trừ dầu mazut) cũng hạ 10-30 đồng một lít, từ 15h chiều nay.',
    category: 'Vĩ mô'
  },
  {
    title: 'Trung Quốc gom khí đốt toàn cầu',
    content: 'Trung Quốc ký nhiều hợp đồng mua khí hóa lỏng (LNG) để đảm bảo nguồn cung trong nước hoặc bán cho nước khác khi nhu cầu nội địa yếu.',
    category: 'Quốc tế'
  },
  {
    title: ' \'Đầu tàu\' TP HCM bắt đầu chuyển động\n',
    content: 'Chưa như kỳ vọng nhưng tình hình đang sáng dần lên, ông Nguyễn Ngọc Thắng, Giám đốc Khối Vận hành chuỗi siêu thị Co.opmart, mô tả hoạt động nửa đầu năm.',
    category: 'Vĩ mô'
  }
]

const Article = ({title, category, content}: {title: string, content: string, category: string}) => {
  return <div style={{ width: '30%', marginRight: 10}}>
    <p className="title">{title}</p>
    <p className="content">{content}</p>
    <p style={{color: 'black'}}>{category}</p>
  </div>
}

function App() {
  return (
    <div className='container'>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: 1000}}>
        {
          data.map((item, index) => {
            if (index === 0) {
              return <div style={{ width: 1000, display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
                <img src={item.img} style={{ width: 700, height: 'auto' }}/>
                <div style={{padding: 20}}>
                  <p className="title">{item.title}</p>
                  <p className="content">{item.content}</p>
                </div>
              </div>
            } else {
              return <Article  category={item.category} content={item.content} title={item.title} key={index} />
            }
          })
        }
      </div>

    </div>
  )
}

export default App
