import React from 'react'

const MainPage = () => {

    return(
        <React.Fragment>
        <section>
            <div className='w-screen h-screen'>
                {/* 맨 왼쪽 스크린 */}
                <div className='bg-blue'>
                    <p>Model</p>
                </div>

                {/* 중간 스크린 */}
                <div>
                    <p>Main</p>
                </div>

                {/* 맨 오른쪽 스크린 */}
                <div>
                    <p>Description</p>
                </div>

            </div>
        </section>
        </React.Fragment>
        
    )
}

export default MainPage