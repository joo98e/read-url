import Button from '@component/common/button'
import CustomInput from '@component/common/input'
import PlainText from '@component/common/plainText'
import React, { useEffect, useState } from 'react'
import data from '../api/json/dummy/data.json'

type Props = {}

interface IDataShape {
  date: {
    years: number
    month: number
    day: number
    hours: number
    min: number
    AMOrPM: "오전" | "오후"
    DayOfWeek: "일" | "월" | "화" | "수" | "목" | "금" | "토"
  }
  result: IDataPiece[];
}

interface IDataPiece {
  path: string;
  title: string;
}

const List = (props: Props) => {
  const [dummy, setDummy] = useState<IDataShape | any>();

  const otherWindowOpen = (url: string) => {
    window.open(`https://proxy.learningfit.co.kr/${url}/`, "_blank");
  }

  useEffect(() => {
    if (data && data.date && data.result) {
      setDummy(data);
      console.log(dummy)
    }
  }, [dummy])

  return (
    <div>
      <div className='flex justify-between p-4'>
        <CustomInput text='검색' name='search' type='text' placeholder="검색어를 입력하세요." />
      </div>
      <div className='p-4'>
        <div className='grid grid-cols-10 border-b-2'>
          <PlainText align="left">No.</PlainText>
          <PlainText className='px-2 text-bold col-span-4'>사업명</PlainText>
          <PlainText className='px-2 text-bold col-span-4'>path</PlainText>
          <PlainText align='center' className='px-2 text-bold'>보기</PlainText>
        </div>
        {
          dummy && dummy.result.map((item: IDataPiece, i: number) => {
            if (item?.title === "unknown" || item?.title.indexOf("�") !== -1) {
              return false;
            }

            return (
              <div className='grid grid-cols-10 py-2 border-b-2' key={i}>
                <PlainText align="left">{i + 1}</PlainText>
                <PlainText className='px-2 col-span-4 truncate'>{item?.title ?? "title"}</PlainText>
                <PlainText className='px-2 col-span-4 truncate'>{item?.path ?? "path"}</PlainText>
                <PlainText align="center" className='px-2 cursor-pointer text-blue-500 underline underline-offset-2 hover:text-blue-800' onClick={() => otherWindowOpen(item?.path.split("\\").slice(-1).toString())}>
                  View
                </PlainText>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List