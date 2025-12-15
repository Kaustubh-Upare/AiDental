import React from 'react'
import { TypographyLarge } from '../Styled/Typography'

type Props = {}

const TaskView = (props: Props) => {
  return (
    <>
      <div className="flex items-center mb-4">
        {<TypographyLarge txt="Tasks" />}
      </div>
    </>
  )
}

export default TaskView