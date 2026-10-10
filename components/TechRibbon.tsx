export default function TechRibbon() {
  const technologies = ['RSLogix 5000', 'MATLAB', 'Python', 'EtherNet/IP', 'Modbus RTU/TCP', 'DeviceNet', 'RS-485', 'OpenCV', 'YOLO', 'PID Tuning', 'PLC Programming', 'DCS Supervision', 'Sensor Feedback Logic'];

  return (
    <div className="glass glass-hover rounded-[24px] p-4">
      <div className="flex flex-wrap gap-3">
        {technologies.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
