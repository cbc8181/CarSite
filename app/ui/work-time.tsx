import clsx from 'clsx';

type WorkTimeProps = {
    className?: string;
}

export default function WorkTime({className}: WorkTimeProps) {
    return (
        <div className="flex flex-col">
            <div className={
                clsx(
                    "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 1 == new Date().getDay() }
                )}>
                <span>Monday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className={
                clsx(
                    "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 2 == new Date().getDay() }
                )
            }>
                <span>Tuesday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className={clsx(
                "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                { "font-semibold": 3 == new Date().getDay() }
            )}>
                <span>Wednesday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className={
                clsx(
                    "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 4 == new Date().getDay() }
                )}>
                <span>Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className={
                clsx(
                    "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 5 == new Date().getDay() }
                )}>
                <span>Friday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className={
                clsx(
                    "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 6 == new Date().getDay() }
                )}>
                <span>Saturday</span>
                <span>Closed</span>
            </div>
            <div className={
                clsx(
                    "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                    { "font-semibold": 0 == new Date().getDay() }
                )}>
                <span>Sunday</span>
                <span>Closed</span>
            </div>
        </div>
    )
}