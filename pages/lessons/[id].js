import { getLessonById } from '../../src/services/lessonService';
import Image from 'next/image';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const lesson = await getLessonById(id);
  return {
    props: {
      lesson: lesson,
    },
  };
}

export default function lessonPage({ lesson }) {
  console.log(lesson, 'Banane');

  return (
    <>
      <h2>{lesson.name}</h2>
      {lesson.process.map((process, index) => {
        return (
          <>
            <h3 key={`${index} ${process.name}`}>{process.name}</h3>
            <p key={index}>{process.instruction}</p>
            <Image key={`${process.name} ${index}`} alt="instruction visual">
              {process.visual}
            </Image>
          </>
        );
      })}
    </>
  );
}
