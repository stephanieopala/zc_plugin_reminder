import React from 'react'
import Modal from '../modal'

const SummaryModal = () => {
	return (
		<Modal title={'Deadline Reminder Sync'}>
			<div>
				<div>
					<div className="border-gray-700 rounded-md flex justify-between">
						<div>
							<img src="" alt="icon" />
							<p>UI Design submission is due yesterday</p>
						</div>
						<p>
							DUE DATE <span>Aug 31</span>
						</p>
					</div>

					<div className="border-gray-700 rounded-md flex justify-between">
						<div>
							<img src="" alt="icon" />
							<p>UI Design submission is due yesterday</p>
						</div>
						<p>
							DUE DATE <span>Aug 31</span>
						</p>
					</div>

					<div className="border-gray-700 rounded-md flex justify-between">
						<div>
							<img src="" alt="icon" />
							<p>UI Design submission is due yesterday</p>
						</div>
						<p>
							DUE DATE <span>Aug 31</span>
						</p>
					</div>
				</div>
			</div>
			<div>
				<p>Shared with</p>
				<div className="flex justify-start">
					<div>
						<img src="../../assets/img/svg/summary-1.svg" alt="profile" />
						<p>Madyn Kors</p>
					</div>
					<div>
						<img src="" alt="profile" />
						<p>Madyn Kors</p>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default SummaryModal
